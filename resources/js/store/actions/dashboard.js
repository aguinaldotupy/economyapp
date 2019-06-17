// import axios from 'axios';
import { BILLING_SUMMARY_FETCHED } from './types'
import { api } from '../../services/index'

// const BASE_URL = '/api'

export function getSummary() {
    const request = api.get('/billingCycles/summary')
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}
