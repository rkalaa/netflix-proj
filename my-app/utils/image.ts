export function getImageUrl(prompt: string) {
  return `https://fast-flux-demo.vercel.app/api/generate-image?text=${encodeURIComponent(prompt)}`
}

