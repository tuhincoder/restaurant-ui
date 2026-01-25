import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loading from "@/components/loader/Loading";

const reactionsList = [
  { label: "Like", emoji: "👍" },
  { label: "Love", emoji: "❤️" },
  { label: "Haha", emoji: "😆" },
  { label: "Wow", emoji: "😮" },
  { label: "Sad", emoji: "😢" },
];

const HappyCustomers = () => {
  const queryClient = useQueryClient();
  const [hoveredPhotoId, setHoveredPhotoId] = useState(null);
  const [successId, setSuccessId] = useState(null);
  const [selectedPhotoForDetails, setSelectedPhotoForDetails] = useState(null);

  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["happy-customers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://restaurant-server-delta-lyart.vercel.app/happy-customers"
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 10,
  });

  const mutation = useMutation({
    mutationFn: async ({ id, emoji }) => {
      return await axios.patch(
        `https://restaurant-server-delta-lyart.vercel.app/happy-customers/${id}/react`,
        { emoji }
      );
    },
    onMutate: async (newReaction) => {
      await queryClient.cancelQueries(["happy-customers"]);
      const previousPhotos = queryClient.getQueryData(["happy-customers"]);
      queryClient.setQueryData(["happy-customers"], (old) =>
        old.map((photo) =>
          photo._id === newReaction.id
            ? {
                ...photo,
                totalLikes: (photo.totalLikes || 0) + 1,
                recentReactions: [
                  newReaction.emoji,
                  ...(photo.recentReactions || []),
                ].slice(0, 10),
              }
            : photo
        )
      );
      return { previousPhotos };
    },
    onSettled: () => queryClient.invalidateQueries(["happy-customers"]),
    onSuccess: (data, variables) => {
      setSuccessId(variables.id);
      setTimeout(() => setSuccessId(null), 1500);
    },
  });

  const getReactionSummary = (reactions = []) => {
    return reactions.reduce((acc, emoji) => {
      acc[emoji] = (acc[emoji] || 0) + 1;
      return acc;
    }, {});
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-[#051117] min-h-screen pt-24 md:pt-32 pb-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic text-white"
          >
            Happy <span className="text-amber-500">Customers</span>
          </motion.h2>
          <p className="text-gray-500 mt-2 font-light tracking-[0.2em] uppercase text-[10px]">
            Real smiles from our guests
          </p>
        </div>

        {/* Grid - কার্ডগুলো সমান রাখার জন্য grid-rows-fr ব্যবহার হয়েছে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-amber-500/30"
            >
              {/* Image Section - Fixed Height & Focus on Top */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={photo.image}
                  alt="Customer"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  style={{ objectPosition: "50% 15%" }} // এটি মাথা থেকে বুক পর্যন্ত ফোকাস ধরে রাখবে
                />
                <div className="absolute top-3 right-3 text-white/80 text-[8px] font-bold bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 italic">
                  {photo.uploadedAt
                    ? new Date(photo.uploadedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })
                    : "NEW"}
                </div>
              </div>

              {/* Content Section - Compact and Fixed padding */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-white font-bold text-sm md:text-base">
                    {photo.name || "Valued Guest"}
                  </h4>
                  <div className="flex text-amber-500 text-[8px]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < (photo.rating || 5) ? "opacity-100" : "opacity-20"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] md:text-[13px] italic leading-snug line-clamp-2 mb-4 h-8 md:h-10">
                  "
                  {photo.caption ||
                    "Exquisite flavors and a truly memorable atmosphere."}
                  "
                </p>

                {/* Footer / Reactions */}
                <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-auto">
                  <div
                    onClick={() =>
                      photo.totalLikes > 0 && setSelectedPhotoForDetails(photo)
                    }
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <div className="flex -space-x-1.5">
                      {[...new Set(photo.recentReactions)]
                        .slice(0, 3)
                        .map((emoji, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full bg-[#0a1217] border border-white/20 flex items-center justify-center text-[9px]"
                          >
                            {emoji}
                          </div>
                        ))}
                    </div>
                    <span className="text-white/60 text-[11px] font-bold">
                      {photo.totalLikes || 0}
                    </span>
                  </div>

                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredPhotoId(photo._id)}
                    onMouseLeave={() => setHoveredPhotoId(null)}
                  >
                    <button
                      onClick={() =>
                        mutation.mutate({ id: photo._id, emoji: "👍" })
                      }
                      className="text-[9px] font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-amber-500 hover:text-black transition-all py-1.5 px-5 rounded-lg border border-white/10"
                    >
                      {successId === photo._id ? "Sent!" : "Like"}
                    </button>

                    <AnimatePresence>
                      {hoveredPhotoId === photo._id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute bottom-full right-0 pb-2 z-[100]"
                        >
                          <div className="bg-[#0a1217] border border-white/20 p-1.5 rounded-full flex gap-1.5 shadow-2xl backdrop-blur-md">
                            {reactionsList.map((reac) => (
                              <button
                                key={reac.label}
                                onClick={() => {
                                  mutation.mutate({
                                    id: photo._id,
                                    emoji: reac.emoji,
                                  });
                                  setHoveredPhotoId(null);
                                }}
                                className="text-base hover:scale-125 transition-transform"
                              >
                                {reac.emoji}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal (Details same as previous) */}
      <AnimatePresence>
        {selectedPhotoForDetails && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoForDetails(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0a1217] border border-white/10 p-6 rounded-2xl max-w-xs w-full shadow-2xl"
            >
              <h3 className="text-white font-serif italic text-xl mb-4 text-center">
                Reaction <span className="text-amber-500">Details</span>
              </h3>
              <div className="space-y-2">
                {Object.entries(
                  getReactionSummary(selectedPhotoForDetails.recentReactions)
                ).map(([emoji, count]) => (
                  <div
                    key={emoji}
                    className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <span className="text-xl">{emoji}</span>
                    <span className="text-white font-bold text-xs">
                      {count} {count > 1 ? "people" : "person"}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedPhotoForDetails(null)}
                className="w-full mt-5 py-3 bg-amber-500 text-black font-bold rounded-xl uppercase tracking-widest text-[10px]"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HappyCustomers;
