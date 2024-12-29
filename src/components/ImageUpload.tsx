import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon, Loader2, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isLoading?: boolean;
}

export const ImageUpload = ({ onImageSelect, isLoading }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const videoRef = useCallback((node: HTMLVideoElement) => {
    if (node) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          node.srcObject = stream;
          setVideoStream(stream);
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
        });
    }
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: false,
  });

  const captureImage = async () => {
    const video = document.createElement('video');
    video.srcObject = videoStream!;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(blob);
        onImageSelect(file);
      }
    }, 'image/jpeg');

    // Stop camera stream
    videoStream?.getTracks().forEach(track => track.stop());
    setVideoStream(null);
    setShowCamera(false);
  };

  const toggleCamera = () => {
    if (showCamera && videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
    setShowCamera(!showCamera);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 mb-4">
        <Button
          type="button"
          variant="outline"
          onClick={toggleCamera}
          className="flex items-center gap-2"
          disabled={isLoading}
        >
          <Camera className="w-4 h-4" />
          {showCamera ? "Hide Camera" : "Use Camera"}
        </Button>
      </div>

      {showCamera ? (
        <div className="relative max-w-2xl mx-auto">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full rounded-2xl"
          />
          <Button
            type="button"
            onClick={captureImage}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            disabled={isLoading}
          >
            Capture Photo
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "relative w-full max-w-2xl mx-auto rounded-2xl border-2 border-dashed p-12 text-center transition-all",
            isDragActive
              ? "border-sage-500 bg-sage-50"
              : "border-gray-300 hover:border-sage-500",
            isLoading && "opacity-50 cursor-not-allowed"
          )}
        >
          <input {...getInputProps()} disabled={isLoading} />
          
          {preview ? (
            <div className="relative mx-auto max-w-xs">
              <img
                src={preview}
                alt="Preview"
                className="rounded-lg shadow-lg animate-fade-in"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                {isLoading ? (
                  <Loader2 className="w-8 h-8 text-sage-600 animate-spin" />
                ) : (
                  <Upload className="w-8 h-8 text-sage-600" />
                )}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Drop your plant image here
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  or click to select a file
                </p>
              </div>
              <div className="flex justify-center gap-2 text-sm text-gray-500">
                <ImageIcon className="w-4 h-4" />
                <span>PNG, JPG or WEBP (max 10MB)</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};