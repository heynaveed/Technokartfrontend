import axios from "axios"

export const AdminLogin = (payload) => {
    return axios.post("https://thankful-waistcoat-bull.cyclic.app/superadminlogin", payload)
}

export const AllPartners = () => {
   return axios.get("https://thankful-waistcoat-bull.cyclic.app/superadmin")
}

export const PostPartners = (payload) => {
    const token=localStorage.getItem("AdminToken")
    return axios.post(`https://thankful-waistcoat-bull.cyclic.app/superadmin`, payload, {'headers' : { 'authorization' : 'Bearer'+' '+token}})
}

export const PartnerLoginss=(payload)=>{
    return axios.post("https://thankful-waistcoat-bull.cyclic.app/partnerlogin",payload)
}