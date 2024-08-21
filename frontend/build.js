const fs = require('fs');
const path = require('path');

// Define the source path of the video file
const sourceVideoPath = path.resolve(__dirname, 'src', 'assets', 'video4.mp4');

// Define the destination path where the video file will be copied during build
const destinationVideoPath = path.resolve(__dirname, 'dist', 'assets', 'video4.mp4');

// Check if the source video file exists
if (fs.existsSync(sourceVideoPath)) {
  // Create the dist/assets directory if it doesn't exist
  fs.mkdirSync(path.dirname(destinationVideoPath), { recursive: true });

  // Copy the video file to the dist/assets directory
  fs.copyFileSync(sourceVideoPath, destinationVideoPath);

  console.log('Video file copied successfully!');
} else {
  console.error('Source video file does not exist. Please ensure it exists at src/assets/video4.mp4');
}
