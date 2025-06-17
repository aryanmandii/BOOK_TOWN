import { toast } from "react-toastify";

export function bufferToBase64(img) {
    // INITIALLY I USED THIS CODE TO CONVERT THE BUFFER RECIEVED FROM BACKEND TO base64
    // BUT LATER ON I CHANGED TO CODE ON BACKEND AND NOW IT PROVIDES base64 AT FIRST PLACE, SO INSTEAD OF
    // REMOVING THIS FUNCTION FROM WHOLE CODE BASE I DECIDED TO REMOVE ITS FUNCTIONALITY, FOR THE SAKE OF TIME

    // let buf = new Uint8Array(img);
    // var binstr = Array.prototype.map.call(buf, function (ch) {
    //     return String.fromCharCode(ch);
    // }).join('');
    // return btoa(binstr);
    
    return img;
}

export function notify(message, type, id = "productAdded") {
    if (type === "success") {
        toast.success(message);
    }
    else if (type === "error") {
        toast.error(message);
    }
    else if (type === "info") {
        toast.info(message, {
            toastId: id
        });
    }
    else if (type === "warning") {
        toast.warn(message);
    }
    else {
        toast(message);
    }
}

export async function verifyToken(authToken) {
    let url = `${process.env.REACT_APP_HOST}/api/auth/getuser`;
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            'auth-token': authToken,
        }
    });
    let data = await res.json();
    if (data.error) {
        return false;
    }
    else {
        return true;
    }
}