import Image from 'next/image';

export default function Admin() {
  return (
    <div className="md:bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <Image className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Tailwind CSS is the only framework that Ive seen scale
              on large teams. Its easy to customize, adapts to any design,
              and the build size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
          </figcaption>
        </div>
    </div>
  )
}
