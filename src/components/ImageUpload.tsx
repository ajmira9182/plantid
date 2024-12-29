import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isLoading?: boolean;
}

export const ImageUpload = ({ onImageSelect, isLoading }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

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

  return (
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
  );
};