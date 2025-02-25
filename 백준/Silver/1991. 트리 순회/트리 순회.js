const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const tree = {}; // 트리를 저장할 객체

// 트리 구성
for (let i = 1; i <= N; i++) {
    const [parent, left, right] = input[i].split(' ');
    tree[parent] = [left, right]; // 부모 기준으로 왼쪽, 오른쪽 자식 저장
}

// 전위 순회 (Preorder)
const preorder = (node) => {
    if (node === '.') return;
    process.stdout.write(node); // 부모 방문
    preorder(tree[node][0]); // 왼쪽 방문
    preorder(tree[node][1]); // 오른쪽 방문
};

// 중위 순회 (Inorder)
const inorder = (node) => {
    if (node === '.') return;
    inorder(tree[node][0]); // 왼쪽 방문
    process.stdout.write(node); // 부모 방문
    inorder(tree[node][1]); // 오른쪽 방문
};

// 후위 순회 (Postorder)
const postorder = (node) => {
    if (node === '.') return;
    postorder(tree[node][0]); // 왼쪽 방문
    postorder(tree[node][1]); // 오른쪽 방문
    process.stdout.write(node); // 부모 방문
};

// 트리 순회 실행
preorder('A');
console.log('');
inorder('A');
console.log('');
postorder('A');
