import axios from 'axios';
import { BILLING_SUMMARY_FETCHED } from './types'

const BASE_URL = '/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}
