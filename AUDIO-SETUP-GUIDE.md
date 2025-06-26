# 🎵 Audio Setup Guide for Connected Creativity

## Where to create the audio folder

The `public/audio/` folder should be created in your **project's root directory**, alongside other folders like `src/`, `node_modules/`, etc.

```
your-project/
├── src/
├── public/
│   ├── audio/          ← Create this folder here
│   │   ├── mindwandering-meditation.mp3
│   │   ├── walking-meditation.mp3
│   │   └── grounding-meditation.mp3
│   └── images/
├── package.json
└── README.md
```

## Step-by-step instructions:

### 1. Create the folder structure
```bash
# In your project root directory, run:
mkdir -p public/audio
```

### 2. Add your audio files
Place your meditation and audio files in the `public/audio/` folder:
- `mindwandering-meditation.mp3`
- `walking-meditation.mp3`
- `grounding-meditation.mp3`

### 3. Test the setup
1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/audio/your-filename.mp3`
3. The audio should play or download

### 4. Update component if needed
If your audio files have different names, update the `DownloadAudio` component:

```typescript
// In src/components/DownloadAudio.tsx
const audioUrl = "/audio/your-actual-filename.mp3"
```

## File requirements:
- **Format**: MP3, WAV, AAC, or OGG
- **Size**: Keep under 10MB for good performance
- **Naming**: Use lowercase with hyphens (e.g., `mind-wandering.mp3`)

## Why this works:
- Files in the `public/` folder are served directly by Next.js
- They're accessible at the root URL (e.g., `/audio/file.mp3`)
- No build process needed - just add files and they're available

## If you don't have audio files yet:
The download button will show a helpful message explaining how to add them. You can:
1. Record your own meditation audio
2. Use royalty-free meditation tracks
3. Create placeholder files for testing

## Need help?
If the download still doesn't work after adding files:
1. Check the browser console for errors
2. Verify the file path matches exactly
3. Make sure the file isn't corrupted
4. Try a different audio format