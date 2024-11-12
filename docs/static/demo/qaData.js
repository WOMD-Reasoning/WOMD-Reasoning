// FILE: static/demo/qaData.js
const qaData = [
    {
        "videoSrc": "static/videos/233af33f6b0fae6b_bev.mp4",
        "imageSrc": null, // "static/images/scid_233af33f6b0fae6b__aid_2847__atype_1.png",
        "questions": [
            {"question": "Is there a speed bump in the vicinity of the ego agent?", "answer": "Yes, the ego agent is approaching a speed bump 2 meters ahead."},
            {"question": "Where is surrounding agent #2 positioned relative to the ego agent?", "answer": "Surrounding agent #2 is 16 meters on the left and 11 meters behind the ego agent."},
            {"question": "What is the current direction of surrounding agent #3 in relation to the ego agent?", "answer": "Surrounding agent #3 is heading left of the ego agent."},
            {"question": "Where is surrounding agent #8 positioned relative to the ego agent?", "answer": "Surrounding agent #8 is 57 meters in front of the ego agent and 21 meters on the left."},
            {"question": "What will the ego agent aim to do in the upcoming moments?", "answer": "The ego agent intends to continue exiting the intersection. It will proceed over the speed bump ahead and continue on its path as there are no interactions with surrounding agents that would require it to alter its course."}
        ],
        "ground_truth": [
            {"question": "Is there a speed bump in the vicinity of the ego agent?", "answer": "The ego agent is approaching a speed bump 1 meter ahead."},
            {"question": "Where is surrounding agent #2 positioned relative to the ego agent?", "answer": "Surrounding agent #2 is 16 meters on the left of the ego agent and 11 meters behind the ego agent."},
            {"question": "What is the current direction of surrounding agent #3 in relation to the ego agent?", "answer": "Surrounding agent #3 is heading left of the ego agent."},
            {"question": "Where is surrounding agent #8 positioned relative to the ego agent?", "answer": "Surrounding agent #8 is 61 meters in front of the ego agent and 25 meters on the left of the ego agent."},
            {"question": "What will the ego agent aim to do in the upcoming moments?", "answer": "The ego agent intends to continue exiting the intersection. It will encounter a speed bump but will continue on its path as there are no interactions with surrounding agents that would alter its course."}
        ]
    },
    {
        "videoSrc": "static/videos/3125203f562507f5_bev.mp4",
        "imageSrc": null, // "static/images/scid_3125203f562507f5__aid_1379__atype_1.png",
        "questions": [
            {"question": "How many stop signs are there at the intersection?", "answer": "There are 4 stop signs in the intersection."},
            {"question": "What is the ego agent's current speed?", "answer": "The ego agent's current speed is 11 m/s."},
            {"question": "What is the ego agent's current motion status?", "answer": "The ego agent is accelerating."},
            {"question": "Is surrounding agent #0 approaching a crosswalk?", "answer": "Yes, surrounding agent #0 is approaching a crosswalk 2 meters ahead."},
            {"question": "What interactions are anticipated between the ego agent and surrounding agent #0 as they navigate the intersection?", "answer": "Surrounding agent #0 will yield to the ego agent because they are both in the intersection, but surrounding agent #0 is approaching a stop sign and the ego agent is already in the intersection."},
            {"question": "What is the ego agent planning to do shortly?", "answer": "The ego agent intends to continue exiting the intersection. It will proceed straight, passing the stop sign and crosswalk, while surrounding agent #0 yields due to its stop sign."}
        ],
        "ground_truth": [
            {"question": "How many stop signs are there at the intersection?", "answer": "There are 4 stop signs in the intersection."},
            {"question": "What is the ego agent's current speed?", "answer": "The ego agent's current speed is 11 m/s."},
            {"question": "What is the ego agent's current motion status?", "answer": "The ego agent is accelerating."},
            {"question": "Is surrounding agent #0 approaching a crosswalk?", "answer": "Yes, surrounding agent #0 is approaching a crosswalk 2 meters ahead."},
            {"question": "What interactions are anticipated between the ego agent and surrounding agent #0 as they navigate the intersection?", "answer": "Surrounding agent #0 will yield to the ego agent because it is not moving and is at a stop sign while the ego agent is already in the intersection and moving."},
            {"question": "What is the ego agent planning to do shortly?", "answer": "The ego agent intends to continue exiting the intersection. It is currently accelerating and there is no indication that it needs to yield to surrounding agent #0, who is not moving and is at a stop sign. Therefore, the ego agent will proceed through the intersection."}
        ]
    },
    {
        "videoSrc": "static/videos/d6054865fbc650f3_bev.mp4",
        "imageSrc": null, // "static/images/scid_d6054865fbc650f3__aid_241__atype_1.png",
        "questions": [
            {"question": "Can you describe the current road configuration in relation to the ego agent?", "answer": "The ego agent is on the 1 lane from the right, out of 3 lanes."},
            {"question": "What type of agent is surrounding agent #2?", "answer": "Surrounding agent #2 is a vehicle."},
            {"question": "Can you describe the motion status of surrounding agent #2?", "answer": "Surrounding agent #2 is moving at a constant speed."},
            {"question": "Where is surrounding agent #3 positioned in relation to the ego agent?", "answer": "Surrounding agent #3 is 15 meters on the left of the ego agent and 6 meters behind."},
            {"question": "Considering their relative speeds and positions, what interaction will occur between the ego agent and surrounding agent #2?", "answer": "Surrounding agent #2 will overtake the ego agent as it is moving faster and is currently behind the ego agent."},
            {"question": "What is the ego agent's intended course of action in the near future?", "answer": "The ego agent intends to continue on its path while decelerating. It will be overtaken by surrounding agent #2, who is approaching from behind at a higher speed. The ego agent does not need to respond to surrounding agent #3 as there is no interaction expected."}
        ],
        "ground_truth": [
            {"question": "Can you describe the current road configuration in relation to the ego agent?", "answer": "The ego agent is on the second lane from the left out of three lanes."},
            {"question": "What type of agent is surrounding agent #2?", "answer": "Surrounding agent #2 is a vehicle."},
            {"question": "Can you describe the motion status of surrounding agent #2?", "answer": "Surrounding agent #2 is moving at a constant speed."},
            {"question": "Where is surrounding agent #3 positioned in relation to the ego agent?", "answer": "Surrounding agent #3 is 15 meters to the left and 6 meters behind the ego agent."},
            {"question": "Considering their relative speeds and positions, what interaction will occur between the ego agent and surrounding agent #2?", "answer": "The ego agent intends to continue on its path while decelerating. It will be overtaken by surrounding agent #2, who is approaching from behind at a higher speed."},
            {"question": "What is the ego agent's intended course of action in the near future?", "answer": "The ego agent intends to continue on its path while decelerating. It will be overtaken by surrounding agent #2, and it will pass by surrounding agent #3, who is moving in the opposite direction. There are no traffic controls or intersections to respond to, so the ego agent will simply maintain its lane and adjust its speed as necessary."}
        ]
    }
    // Add more items here
];