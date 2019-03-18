package com.myproject.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "")
public class ApiController {

    @GetMapping("/")
    @ResponseBody
    public ResponseEntity<String> index() {
        return new ResponseEntity<>("API Ok =D", HttpStatus.OK);
    }

    @GetMapping("/ping")
    @ResponseBody
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong =D", HttpStatus.OK);
    }

}
