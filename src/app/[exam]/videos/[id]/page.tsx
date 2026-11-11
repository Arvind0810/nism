import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VideoEmbed from "@/components/VideoEmbed";
import { examHref, formatDuration, getAvailableExams, getStandaloneVideo, getStandaloneVideos } from "@/data/exams";
import { requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return getAvailableExams().flatMap((exam) =>
    getStandaloneVideos(exam).map((video) => ({ exam: exam.id, id: video.id })),
  );
}

export async function generateMetadata(props: PageProps<"/[exam]/videos/[id]">): Promise<Metadata> {
  const params = await props.params;
  const exam = requireAvailableExam(params.exam);
  const video = getStandaloneVideo(exam, params.id);
  return video ? { title: `${exam.code}: ${video.title}` } : {};
}

export default async function VideoPage(props: PageProps<"/[exam]/videos/[id]">) {
  const params = await props.params;
  const exam = requireAvailableExam(params.exam);
  const video = getStandaloneVideo(exam, params.id);
  if (!video) notFound();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 px-4 py-8">
      <p className="text-sm text-muted">
        <Link href={examHref(exam)} className="hover:text-foreground">
          ← {exam.code} overview
        </Link>
      </p>
      <h1 className="text-2xl font-semibold tracking-tight">{video.title}</h1>
      <VideoEmbed video={video} />
      <p className="text-sm text-muted">{formatDuration(video.durationSeconds)} · Hindi audio</p>
    </div>
  );
}
