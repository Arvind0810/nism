import type { Video } from "@/data/types";

function watchUrl(video: Video): string {
  return `https://www.youtube.com/watch?v=${video.id}`;
}

export default function VideoEmbed({ video }: { video: Video }) {
  if (video.embeddable === false) {
    return (
      <a
        href={watchUrl(video)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid aspect-video w-full place-items-center overflow-hidden rounded-xl border border-border bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)` }}
      >
        <span className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/45" />
        <span className="relative flex flex-col items-center gap-2 px-4 text-center text-white">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-xl shadow-lg">▶</span>
          <span className="font-semibold">Watch {video.title} on YouTube ↗</span>
          <span className="text-xs text-white/80">The channel doesn&apos;t allow this video to play inside other sites.</span>
        </span>
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <a
        href={watchUrl(video)}
        target="_blank"
        rel="noopener noreferrer"
        className="self-end text-xs text-muted hover:text-foreground"
      >
        Watch on YouTube ↗
      </a>
    </div>
  );
}
