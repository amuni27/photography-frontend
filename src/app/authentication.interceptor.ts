import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(AuthService).token;
  if (!authToken) {
    return next(req);
  }else{
    const clonedRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`,
      },
    });

    return next(clonedRequest);
  }


};
