import Link from "next/link"
import { isLessonCompleted } from "../../utils/machineUtils"
import { Lesson } from "common"

type Props = {
  lessons: Lesson[]
  progressService: object
  course: string
}

export default function CourseNextLessonBtn({
  lessons,
  progressService,
  course,
}: Props) {
  const incompleteLessons = lessons
    .map((lesson) => {
      if (!isLessonCompleted(progressService, `${course}/${lesson.slug}`)) {
        return lesson.slug
      }
    })
    .filter((lesson) => lesson !== undefined)

  const buttonText = () => {
    if (!incompleteLessons.length) {
      return "Course Completed"
    }

    if (incompleteLessons.length === lessons.length) {
      return "Start Course"
    } else {
      return "Next Lesson"
    }
  }

  const buttonURL = () => {
    if (!incompleteLessons.length) {
      return "/"
    } else {
      return `${course}/${incompleteLessons[0]}`
    }
  }

  return (
    <div className="py-20">
      <Link href={buttonURL()}>
        <a
          data-test="next-lesson-button"
          className="mx-auto max-w-xl flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
        >
          {buttonText()}
        </a>
      </Link>
    </div>
  )
}
