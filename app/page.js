import AddStudentForm from "@/components/StudentForm";
import StudentList from "@/components/StudentList";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-20 row-start-2 items-center">
        <StudentList />
        <AddStudentForm />
      </main>
    </div>
  );
}
