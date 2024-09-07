"use client";

import { UploadButton } from "@/lib/uploadthing";

const ImageUpload = ({ onUploadComplete }: { onUploadComplete: (url: string) => void }) => {
    return (
        <main className="flex flex-col items-center justify-between p-8">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (res && res.length > 0) {
                        const uploadedUrl = res[0].url;
                        console.log("Image URL: ", uploadedUrl);
                        onUploadComplete(uploadedUrl);
                    }
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
};

export default ImageUpload;


// "use client";

// import { UploadButton } from "@/lib/uploadthing";

// const ImageUpload = () => {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <UploadButton
//                 endpoint="imageUploader"
//                 onClientUploadComplete={(res) => {
//                     // Do something with the response
//                     console.log("Files: ", res);
//                     alert("Upload Completed");
//                 }}
//                 onUploadError={(error: Error) => {
//                     // Do something with the error.
//                     alert(`ERROR! ${error.message}`);
//                 }}
//             />
//         </main>
//     );
// }

// export default ImageUpload;
