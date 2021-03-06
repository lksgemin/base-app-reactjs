import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import { REQUEST } from '../services/Request';

const request = REQUEST;

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/user/getUserProfileBy/" + username,
        method: 'GET'
    });
}

export function getUserById(userid) {
    return request({
        url: API_BASE_URL + "/user/" + userid,
        method: 'GET'
    });
}

export function getAllUsers() {
    return request({
        url: API_BASE_URL + "/user/all",
        method: 'GET'
    });
}

export function updateUser(updateUserRequest) {
    return request({
        url: API_BASE_URL + "/user/" + updateUserRequest.id,
        method: 'PUT',
        body: JSON.stringify(updateUserRequest)
    });
}