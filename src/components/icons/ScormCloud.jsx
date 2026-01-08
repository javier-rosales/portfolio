import sizeList from './sizeList'
import scormCloudLogo from '../../assets/images/icons/scorm-cloud-logo.webp'

const ScormCloud = ({ size = 'md' }) => {
  return (
    <img
      src={scormCloudLogo}
      className={`w-${sizeList[size]} h-${sizeList[size]} object-contain`}
      alt='SCORM Cloud Icon'
    />
  )
}

export default ScormCloud