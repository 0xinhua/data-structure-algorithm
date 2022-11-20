// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/

// 无重复字符的最长子串长度

function lengthOfLongestSubstring(s: string): number {
	let arr = [];
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		let index = arr.indexOf(s[i]);
		if (index !== -1) {
			arr.splice(0, index + 1);
		}
		arr.push(s.charAt(i));
		max = Math.max(arr.length, max);
	}
	return max;
};

export default lengthOfLongestSubstring;
