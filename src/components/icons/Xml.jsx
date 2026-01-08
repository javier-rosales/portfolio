import sizeList from './sizeList'
import xmlLogo from '../../assets/images/icons/xml-icon.webp'

const Xml = ({ size = 'md' }) => {
  return (
    <img
      src={xmlLogo}
      className={`w-${sizeList[size]} h-${sizeList[size]} object-contain`}
      alt='XML Icon'
    />
  )
}

export default Xml