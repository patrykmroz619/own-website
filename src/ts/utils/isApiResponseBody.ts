export const isApiResponseBody = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any
): body is ApiResponseBody<unknown> => Boolean(body?.data);
