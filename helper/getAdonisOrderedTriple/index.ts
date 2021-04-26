export interface AdonisOrderedTriple {
  fullImage: string;
  thumbnailImage: string;
  thumbnailBlurImage: string;
}

const getAdonisOrderedTriple = (imageURL: string): AdonisOrderedTriple => {
  let originalImage = imageURL;
  let thumbnail = imageURL.replace("gallery", "gallery_thumbnail");
  let thumbnailBlur = imageURL.replace("gallery", "gallery_thumbnail_blur");

  return {
    fullImage: originalImage,
    thumbnailImage: thumbnail,
    thumbnailBlurImage: thumbnailBlur,
  };
};

export default getAdonisOrderedTriple;
