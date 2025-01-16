// import Reels from '../ReelPostThings/ReelSchema.js';
// import Posts from '../EveryPostThing/PostsSchema.js';

// // Assuming you have two models, ModelOne and ModelTwo
// const Video = Reels // Replace with your actual model
// const Image = Posts // Replace with your actual model



// const fetchAndSortData =  async (req, res) => {
//     try {
//         // Fetch data from both collections
//         const videos = await Video.find().exec();
//         const images = await Image.find().exec();

//         // Combine and sort data by createdAt timestamp
//         const combinedData = [...videos, ...images].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

//         res.json(combinedData);
//     } catch (error) {
//         console.error('Error fetching media:', error);
//         res.status(500).json({ error: 'Failed to fetch media.' });
//     }
// };

// // Connect to MongoDB and execute the function

// export default fetchAndSortData


import Reels from '../ReelPostThings/ReelSchema.js';
import Posts from '../EveryPostThing/PostsSchema.js';

// Assuming you have two models, ModelOne and ModelTwo
const Video = Reels // Replace with your actual model
const Image = Posts // Replace with your actual model

// const router = express.Router();



// // Video model
// const Video = mongoose.model('Video', new mongoose.Schema({
//     senderId: String,
//     postReel: String,
//     postMessage: String,
//     profilePic: String,
//     username: String,
//     fullname: String,
//     createdAt: Date,
//     updatedAt: Date
// }));

// // Image model
// const Image = mongoose.model('Image', new mongoose.Schema({
//     senderId: String,
//     postImage: String,
//     postMessaage: String, // Note the typo in the key
//     profilePic: String,
//     username: String,
//     fullname: String,
//     createdAt: Date,
//     updatedAt: Date
// }));

// API endpoint
 const ExploreController = async (req, res) => {
    try {
        // Fetch data from both collections
        const videos = await Video.find().exec();
        const images = await Image.find().exec();

        // Normalize the data structure
        const normalizedVideos = videos.map(video => ({
            type: 'video',
            mediaUrl: video.postReel,
            message: video.postMessage,
            profilePic: video.profilePic,
            username: video.username,
            fullname: video.fullname,
            createdAt: video.createdAt
        }));

        const normalizedImages = images.map(image => ({
            type: 'image',
            mediaUrl: image.postImage,
            message: image.postMessaage, // Handle the typo in the database key
            profilePic: image.profilePic,
            username: image.username,
            fullname: image.fullname,
            createdAt: image.createdAt
        }));

        // Combine and sort the data
        const combinedData = [...normalizedVideos, ...normalizedImages].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        res.json(combinedData);
    } catch (error) {
        console.error('Error fetching media:', error);
        res.status(500).json({ error: 'Failed to fetch media.' });
    }
};

export default ExploreController