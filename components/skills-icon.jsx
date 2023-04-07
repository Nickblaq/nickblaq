import skills from "@/utils/skills";


export default function SkillsIcons () {

    return (
        <div className="flex items-center justify-center lg:mt-16 flex-wrap">
      {skills.map(({ src, name }) => {
        return <img src={src} alt={name} key={src} className='p-2 sm:p-6 h-16 sm:h-24' />;
      })}
      </div>
    )
}