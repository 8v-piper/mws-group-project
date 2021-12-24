import { Aggregation } from "./aggregation";
import { Result } from "./result";

export interface Data {
    count: number
    next: string
    previous: string
    results: Result[]
    aggregations: Aggregation[]
    search_tracking_id: string
}
