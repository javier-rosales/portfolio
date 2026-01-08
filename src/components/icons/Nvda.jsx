import sizeList from './sizeList'
import nvdaLogo from '../../assets/images/icons/nvda-logo.webp'

const Nvda = ({ size = 'md' }) => {
  return (
    <img
      src={nvdaLogo}
      className={`w-${sizeList[size]} h-${sizeList[size]} object-contain`}
      alt='NVDA Icon'
    />
  )
}

export default Nvda