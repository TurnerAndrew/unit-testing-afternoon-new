import { shortenText } from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText will not alter strings less than 100 chars', () => {
    const result = shortenText(shortText)
    expect(result).toHaveLength(shortText.length)
})

test('shortenText shortens strings over 100 chars and append ...', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount returns total word count for a post', () => {
    const count = wordCount(posts)
    expect(count).toBe(233)
})

test('attachUserName checks if first post has a property displayName', () => {
    const result = attachUserName(users, posts)
    expect(result[0]).toHaveProperty('displayName')
})

test('attachUserName removes posts with no matching user', () => {
    const result = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(result).not.toContainEqual(deletedPost)
})