import { PriceDetail } from "./price-detail";
import { VisibleInstructor } from "./visible-instructor";

export interface Result {
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
    predictive_score: any
    relevancy_score: any
    input_features: any
    lecture_search_result: any
    curriculum_lectures: any[]
    order_in_results: any
    curriculum_items: any[]
    headline: string
    instructor_name: any
  }