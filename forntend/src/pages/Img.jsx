// import React, { useState, useEffect } from 'react';
// import { v2 as cloudinary } from 'cloudinary';

// const Img = () => {
//   const [uploadResult, setUploadResult] = useState(null);
//   const [optimizeUrl, setOptimizeUrl] = useState('');
//   const [autoCropUrl, setAutoCropUrl] = useState('');

//   useEffect(() => {
//     const uploadImage = async () => {
//       // Cloudinary configuration
//       cloudinary.config({
//         cloud_name: 'drnv3urrh',
//         api_key: '465446594624717',
//         api_secret: '<your_api_secret>', // Replace with your actual API secret
//       });

//       try {
//         // Upload an image
//         const result = await cloudinary.uploader.upload(
//           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', 
//           { public_id: 'shoes' }
//         );
        
//         setUploadResult(result);
        
//         // Optimize the delivery (auto-format and auto-quality)
//         const optimizedUrl = cloudinary.url('shoes', {
//           fetch_format: 'auto',
//           quality: 'auto',
//         });
        
//         setOptimizeUrl(optimizedUrl);
        
//         // Auto-crop the image to a square
//         const croppedUrl = cloudinary.url('shoes', {
//           crop: 'auto',
//           gravity: 'auto',
//           width: 500,
//           height: 500,
//         });
        
//         setAutoCropUrl(croppedUrl);
//       } catch (error) {
//         console.error('Image upload failed:', error);
//       }
//     };

//     uploadImage();
//   }, []);

//   return (
//     <div>
//       <h2>Image Upload and Transformation</h2>
//       {uploadResult && (
//         <div>
//           <h3>Upload Result</h3>
//           <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
//         </div>
//       )}
      
//       {optimizeUrl && (
//         <div>
//           <h3>Optimized Image</h3>
//           <img src={optimizeUrl} alt="Optimized" />
//         </div>
//       )}
      
//       {autoCropUrl && (
//         <div>
//           <h3>Auto-Cropped Image</h3>
//           <img src={autoCropUrl} alt="Auto-Cropped" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Img;
