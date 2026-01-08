import sizeList from './sizeList'
import scormLogo from '../../assets/images/icons/scorm-logo.webp'

const Scorm = ({ size = 'md' }) => {
  return (
    <img
      src={scormLogo}
      className={`w-${sizeList[size]} h-${sizeList[size]} object-contain`}
      alt='SCORM Icon'
    />
  )
}

export default Scorm