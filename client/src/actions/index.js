export const REMOVE_FRIEND = "REMOVE_FRIEND";


export function removeFriend(friendId) {
    console.log(friendId);
    return {
        type: REMOVE_FRIEND,
        friendId
    };
}

export const CREATE_TICKET = "CREATE_TICKET";

export function createTicket() {
    console.log("(actions)Creating ticket...");
    return {
        type: CREATE_TICKET,
        "Stuff":"(payload)TESTING TICKET"
    }
}

export const RESET_FRIENDS = "resetFriends";

export function resetFriends() {
    console.log("Resetting friends...");
    return {
        type: RESET_FRIENDS
    };
}