import { Lesson } from "common"

type Props = {
  index: number
  isCompleted: boolean
  lessons: Lesson[]
}

export default function ProgressLine({ index, isCompleted, lessons }: Props) {
  return (
    <>
      {index !== lessons.length - 1 ? (
        <div
          className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
            isCompleted ? "bg-indigo-600" : "bg-gray-300"
          }`}
          aria-hidden="true"
        />
      ) : null}
    </>
  )
}
