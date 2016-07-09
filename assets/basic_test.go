package main

import "testing"

func TestBar(t *testing.T) {
	_, err := bar(false)
	if err == nil {
		t.Error("Expected an error")
	}

	ret, _ := bar(true)
	if ret != "keeper" {
		t.Errorf("Expected 'keeper', got %s", ret)
	}
}

func BenchmarkBar(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_, _ = bar(false)
	}
}