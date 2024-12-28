const ContactLink = ({ href, icon, text }) => {
  return (
    <a
      className='flex gap-2 items-center bg-[#f0f7ff] hover:bg-[#ebf5ff] active:bg-[#e0f0ff] dark:bg-[#0f1c2e] dark:hover:bg-[#10233d] dark:active:bg-[#0f2f57] border border-[#cce6ff] hover:border-[#99ceff] active:border-[#52aeff] dark:border-[#0d3868] dark:hover:border-[#0a4380] dark:active:border-[#0091ff] px-4 py-2 rounded-md text-[#0068d6] dark:text-[#52A8FF]'
      href={href}
      target='_blank'
    >
      {icon}
      <span>
        {text}
      </span>
    </a>
  )
}

export default ContactLink