import { useEffect } from "react"
import { useSelector } from "react-redux"

export const DNS = `allbvegan`
export const Bucket = `media.${DNS}.com`
export const Region = `s3.ap-south-1`
export const MediaUR = `https://${Region}.amazonaws.com/${Bucket}/`



