import Image from "next/image";

export function ChirOpsLogo({
  className = "",
  width = 200,
  height = 200
}: { className?: string, width?: number, height?: number }) {

  return (
    <>
    <Image
    src="/logoChirOps.svg"
    alt="logo"
    width={width}
    height={height}
    className={className}/>
    </>
  )
}
