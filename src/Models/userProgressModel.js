const mongoose = require("mongoose");

const userProgressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        progress: [
            {
                moduleID: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "NewModule",
                },
                moduleCode: String,
                completed: {
                    type: Boolean,
                    default: false,
                },
                status: {
                    type: String,
                    enum: ['completed', 'ongoing'],
                    default: 'ongoing',
                },
                startedAt: Date,
                completedAt: Date,
                progressTopics: [
                    {
                        topicID: {
                            type: mongoose.Schema.Types.ObjectId,
                        },
                        topicCode: String,
                        status: {
                            type: String,
                            enum: ['completed', 'ongoing'],
                            default: 'ongoing',
                        },
                        startedAt: Date,
                        completedAt: Date,
                        progressSubtopics: [
                            {
                                subtopicId: {
                                    type: mongoose.Schema.Types.ObjectId,
                                },
                                subtopicCode: String,
                                status: {
                                    type: String,
                                    enum: ['completed', 'ongoing'],
                                    default: 'ongoing',
                                },
                                startedAt: Date,
                                completedAt: Date,
                            },
                        ],
                    },
                ],
            },
        ],
      
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserProgress", userProgressSchema);
