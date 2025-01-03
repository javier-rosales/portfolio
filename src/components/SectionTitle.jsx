const SectionTitle = ({ title, id }) => {
  return (
    <h2 id={id} className='mb-5 md:mb-6 lg:mb-7 scroll-mt-[4.5rem] md:scroll-mt-24 text-4xl md:text-5xl font-medium'>
      {title}
    </h2>
  )
}

export default SectionTitle