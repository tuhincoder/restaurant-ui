import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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
      const res = await axios.get("http://localhost:5000/happy-customers");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async ({ id, emoji }) => {
      return await axios.patch(
        `http://localhost:5000/happy-customers/${id}/react`,
        { emoji }
      );
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(["happy-customers"]);
      setSuccessId(variables.id);
      setTimeout(() => setSuccessId(null), 2000);
    },
  });

  const getReactionSummary = (reactions = []) => {
    return reactions.reduce((acc, emoji) => {
      acc[emoji] = (acc[emoji] || 0) + 1;
      return acc;
    }, {});
  };

  if (isLoading)
    return (
      <div className="text-center py-40 text-amber-500 font-serif italic tracking-widest">
        Loading Moments...
      </div>
    );

  return (
    <section className="bg-[#051117] min-h-screen pt-20 md:pt-32 pb-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif italic text-white"
          >
            Happy <span className="text-amber-500">Customers</span>
          </motion.h2>
          <p className="text-gray-500 mt-2 font-light tracking-[0.1em] md:tracking-[0.2em] uppercase text-[9px] md:text-[12px]">
            Real smiles from our beloved guests
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col transition-all duration-500 hover:border-amber-500/20 shadow-xl"
            >
              {/* Image Section - Mobile-friendly height */}
              <div className="p-2 md:p-4">
                <div className="overflow-hidden rounded-[1.2rem] md:rounded-[2rem] aspect-[4/3] md:aspect-square relative">
                  <img
                    src={photo.image}
                    alt="Customer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content Section - Compact for Mobile */}
              <div className="px-5 pb-5 md:px-8 md:pb-8 pt-1">
                <div className="flex justify-between items-start mb-3 md:mb-5">
                  <div>
                    <h4 className="text-white font-semibold text-base md:text-lg tracking-wide">
                      {photo.name || "Valued Guest"}
                    </h4>
                    <div className="flex text-amber-500 text-[8px] md:text-[10px] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < (photo.rating || 5)
                              ? "opacity-100"
                              : "opacity-20"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-500 text-[8px] font-bold border border-white/5 bg-white/[0.03] px-2 py-0.5 rounded">
                    {photo.uploadedAt
                      ? new Date(photo.uploadedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })
                      : "NEW"}
                  </div>
                </div>

                <div className="mb-4 md:mb-8">
                  <p className="text-gray-400 text-xs md:text-sm italic leading-relaxed line-clamp-2 md:line-clamp-3">
                    "
                    {photo.caption ||
                      "Exquisite flavors and a truly memorable atmosphere."}
                    "
                  </p>
                </div>

                {/* Footer / Reactions */}
                <div className="flex justify-between items-center pt-4 border-t border-white/5 relative">
                  <div
                    onClick={() =>
                      photo.totalLikes > 0 && setSelectedPhotoForDetails(photo)
                    }
                    className={`flex items-center gap-2 ${
                      photo.totalLikes > 0
                        ? "cursor-pointer hover:bg-white/5"
                        : "cursor-default"
                    } rounded-lg px-1`}
                  >
                    {photo.totalLikes > 0 && (
                      <div className="flex -space-x-2">
                        {[...new Set(photo.recentReactions)]
                          .slice(0, 3)
                          .map((emoji, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0a1217] border border-white/10 flex items-center justify-center text-[10px] md:text-[11px]"
                            >
                              {emoji}
                            </div>
                          ))}
                      </div>
                    )}
                    <span
                      className={`${
                        photo.totalLikes > 0 ? "text-white" : "text-gray-600"
                      } text-[10px] md:text-xs font-bold font-mono`}
                    >
                      {photo.totalLikes || 0}
                    </span>
                  </div>

                  {/* Like Button - Smaller for Mobile */}
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredPhotoId(photo._id)}
                    onMouseLeave={() => setHoveredPhotoId(null)}
                  >
                    <AnimatePresence>
                      {successId === photo._id && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -35 }}
                          exit={{ opacity: 0 }}
                          className="absolute right-0 text-amber-500 text-[8px] font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 z-[110]"
                        >
                          THANKS!
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() =>
                        mutation.mutate({ id: photo._id, emoji: "👍" })
                      }
                      className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white bg-white/5 hover:bg-amber-500 hover:text-black transition-all py-2 md:py-3 px-5 md:px-7 rounded-lg md:rounded-xl border border-white/10"
                    >
                      Like
                    </button>

                    {/* Emoji Picker - Mobile Touch friendly */}
                    <AnimatePresence>
                      {hoveredPhotoId === photo._id && !successId && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-full right-0 pb-3 z-[100]"
                        >
                          <div className="bg-[#0a1217] border border-white/10 p-1.5 rounded-full flex gap-2 shadow-2xl backdrop-blur-xl ring-1 ring-amber-500/20">
                            {reactionsList.map((reac) => (
                              <button
                                key={reac.label}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  mutation.mutate({
                                    id: photo._id,
                                    emoji: reac.emoji,
                                  });
                                  setHoveredPhotoId(null);
                                }}
                                className="text-lg md:text-xl hover:scale-125 px-1 transition-transform"
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

      {/* Details Modal */}
      <AnimatePresence>
        {selectedPhotoForDetails && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoForDetails(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0a1217] border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] max-w-sm w-full"
            >
              <h3 className="text-white font-serif italic text-xl md:text-2xl mb-6 text-center">
                Reaction <span className="text-amber-500">Details</span>
              </h3>
              <div className="space-y-3">
                {Object.entries(
                  getReactionSummary(selectedPhotoForDetails.recentReactions)
                ).map(([emoji, count]) => (
                  <div
                    key={emoji}
                    className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <span className="text-xl">{emoji}</span>
                    <span className="text-white font-bold text-sm">
                      {count} {count > 1 ? "people" : "person"} reacted
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedPhotoForDetails(null)}
                className="w-full mt-6 py-3 bg-amber-500 text-black font-bold rounded-xl uppercase tracking-widest text-[10px]"
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
