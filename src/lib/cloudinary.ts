/**
 * Inserts Cloudinary auto-format/auto-quality/width transformations into an
 * existing Cloudinary delivery URL, without needing to re-upload or change
 * any stored image URLs.
 */
export function optimizedCloudinaryUrl(url: string, width: number): string {
  const marker = "/image/upload/";
  const markerIndex = url.indexOf(marker);

  if (markerIndex === -1) return url;

  const insertAt = markerIndex + marker.length;
  return `${url.slice(0, insertAt)}f_auto,q_auto,w_${width}/${url.slice(insertAt)}`;
}
