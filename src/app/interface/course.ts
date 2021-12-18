import { PriceDetail } from "./price-detail";
import { VisibleInstructor } from "./visible-instructor";


export interface Course {
    _class: string
    id: number
    title: string
    url: string
    is_paid: boolean
    price: string
    price_detail: PriceDetail
    price_serve_tracking_id: string
    visible_instructors: VisibleInstructor[]
    image_125_H: string
    image_240x135: string
    is_practice_test_course: boolean
    image_480x270: string
    published_title: string
    tracking_id: string
}
