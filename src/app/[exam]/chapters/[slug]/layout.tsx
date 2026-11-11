import ChapterSidebar from "@/components/ChapterSidebar";
import { chapterParams } from "@/lib/examParams";

export function generateStaticParams() {
  return chapterParams();
}

export default async function ChapterLayout({ children, params }: LayoutProps<"/[exam]/chapters/[slug]">) {
  const { exam } = await params;
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[260px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <ChapterSidebar examId={exam} />
        </div>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
