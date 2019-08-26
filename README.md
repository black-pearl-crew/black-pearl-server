# black-pearl-server

## API Endpoints
Almost all endpoints expect an `authorization` header with the server's secret key

Postman Collection: https://www.getpostman.com/collections/d3f481a7a1dd71907ae7

### GET `/`
    - Sanity Check- Returns a message saying the server is up
    - This is the only endpoint that doesn't need an auth header
### POST `/api/add-room`
    - Data can be sent via the body
    - Expects all required fields in the Rooms Database
### PUT `/api/update-room`
    - Data can be sent via the body
    - Expects at least the `room_id`
### GET `/api/get-room/:id`
    - Expects the applicable `room_id` via a param
### GET `/api/get-graph`
    - Returns all Rooms

## Rooms Database Row
```
{
    room_id - integer - required
    title - string - required
    description - string - required
    coordinate_x - integer - required
    coordinate_y - integer - required
    elevation - integer - required
    terrain - string - required
    exit_n - boolean - required
    exit_s - boolean - required
    exit_e - boolean - required
    exit_w - boolean - required
    room_n - integer - optional - FK of room to North
    room_s - integer - optional - FK of room to South
    room_e - integer - optional - FK of room to East
    room_w - integer - optional - FK of room to West
    created_at - timestamp - optional - Defaults to current timestamp
}
```