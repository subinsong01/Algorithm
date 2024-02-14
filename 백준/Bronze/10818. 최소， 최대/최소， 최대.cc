#include <iostream>
#include <vector>
#include <limits> // numeric_limits를 사용하기 위해 필요

int main() {
    // 정수의 개수 N 입력 받기
    int N;
    std::cin >> N;

    // N개의 정수를 벡터에 저장
    std::vector<int> numbers(N);
    for (int i = 0; i < N; ++i) {
        std::cin >> numbers[i];
    }

    // 벡터에서 최소값과 최대값 찾기
    int min_value = std::numeric_limits<int>::max(); // 최대값으로 초기화
    int max_value = std::numeric_limits<int>::min(); // 최소값으로 초기화
    for (int i = 0; i < N; ++i) {
        min_value = std::min(min_value, numbers[i]);
        max_value = std::max(max_value, numbers[i]);
    }

    // 최소값과 최대값 출력
    std::cout << min_value << " " << max_value << std::endl;

    return 0;
}
