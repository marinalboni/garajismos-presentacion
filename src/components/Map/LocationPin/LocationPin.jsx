import { FaMousePointer } from "react-icons/fa";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMousePointer className="icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin;