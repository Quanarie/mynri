package com.mynri.mynri.post.payment;

import com.mynri.mynri.user.User;
import com.mynri.mynri.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentRepository paymentRepository;

    @GetMapping("/payments")
    public List<Payment> getPayments() {
        return (List<Payment>) paymentRepository.findAll();
    }
}

