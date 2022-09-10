// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host:"https://activity-loyalty-service.qa.cnxloyalty.com",
  globalCnxCorrelationId: 'activity-stage-mayank-'+Date.now().toString(),
  cnxUserip: '127.128.128.128',
  cnxTenantId: '2o9o3ae99ts' ,
  sessionId:'',
};
export const autosearchEnvironment = {
  production: false,
  host:"https://autosuggest-orxe-service.qa.cnxloyalty.com/api/autosuggest/v1.0/search",
  sessionId:'b32a827f-bd40-4e33-8886-d6a4fccac8ae',
  token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbngtdGVuYW50SWQiOiIzZTFnbzRpbHhxOCIsImNueC1zZXNzaW9uaWQiOiIzNTgyZmNmZS0wYjFhLTRhMjYtOGFjYy1mYjAyNjMyYjNmYWMiLCJjbngtY29ycmVsYXRpb25JZCI6IjMwNjE0Y2YwLTMxMjQtYzA1OS1hYTE4LWY0YjU5ZTUzN2I1NiIsIkNTUkYtVG9rZW4iOiIxOTRkNTA1Ny0xNzlmLTQ0ZjktOWQ0NC0yOTAwZThmMzdhMGMiLCJjbGllbnQtaWQiOiIxMDMiLCJwcm9ncmFtLWlkIjoiMTM4OSIsInByb2dyYW0tZ3JvdXAtaWQiOiI1MDgiLCJkZXZpY2UtdHlwZSI6IkRlc2t0b3AiLCJwYXJ0aWNpcGFudC1jb2RlIjoiMjQzNzM3MzIiLCJuYmYiOjE2NjI2MTE2MDksImV4cCI6MTY2MjYxNTIwOSwiaWF0IjoxNjYyNjExNjA5LCJpc3MiOiJodHRwczovL29yeGUtYXBpLnFhLmNueGxveWFsdHkuY29tIn0.aviJlfEq9OcymMvtrZ2D4xvTd9kG8l1BXxb-vKrHHBU',
  cnxTenantId: '3e1go4ilxq8',
}

export const hotelEnvironment = {
  production: false,
  host: "https://hotel-loyalty.stage.cnxloyalty.com",
  globalCnxCorrelationId: 'hotel-stage-mayank-'+Date.now().toString(),
  cnxUserip: '127.0.0.1',
  cnxTenantId: '2pq3iaipudc',
  cnxEnvironmentToken: 'SG',
  cnxClientId: '123',
  sessionId:'',
}

export const carEnvironment = {
  production: false,
  host: "https://hotel-loyalty.stage.cnxloyalty.com",
  globalCnxCorrelationId: 'hotel-stage-mayank-'+Date.now().toString(),
  cnxUserip: '127.0.0.1',
  cnxTenantId: '2pq3iaipudc',
  cnxEnvironmentToken: 'SG',
  cnxClientId: '123',
  sessionId:'',
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
