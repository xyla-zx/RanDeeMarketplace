
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  phone: 'phone',
  email: 'email',
  fullName: 'fullName',
  avatarUrl: 'avatarUrl',
  role: 'role',
  isVerified: 'isVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastLoginAt: 'lastLoginAt'
};

exports.Prisma.ShopScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  slug: 'slug',
  description: 'description',
  logoUrl: 'logoUrl',
  coverImageUrl: 'coverImageUrl',
  status: 'status',
  categoryIds: 'categoryIds',
  province: 'province',
  district: 'district',
  subdistrict: 'subdistrict',
  postalCode: 'postalCode',
  addressLine: 'addressLine',
  latitude: 'latitude',
  longitude: 'longitude',
  phone: 'phone',
  lineId: 'lineId',
  facebookUrl: 'facebookUrl',
  instagramUrl: 'instagramUrl',
  isVerified: 'isVerified',
  verifiedAt: 'verifiedAt',
  avgRating: 'avgRating',
  totalReviews: 'totalReviews',
  totalSales: 'totalSales',
  responseTimeMin: 'responseTimeMin',
  responseTimeMax: 'responseTimeMax',
  opensAt: 'opensAt',
  closesAt: 'closesAt',
  planType: 'planType',
  planExpiresAt: 'planExpiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ListingScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  title: 'title',
  description: 'description',
  status: 'status',
  categoryId: 'categoryId',
  condition: 'condition',
  priceSatang: 'priceSatang',
  originalPriceSatang: 'originalPriceSatang',
  stock: 'stock',
  sku: 'sku',
  weightGram: 'weightGram',
  dimensions: 'dimensions',
  images: 'images',
  videoUrl: 'videoUrl',
  isCodAllowed: 'isCodAllowed',
  shippingFromProvince: 'shippingFromProvince',
  shippingDaysMin: 'shippingDaysMin',
  shippingDaysMax: 'shippingDaysMax',
  views: 'views',
  saves: 'saves',
  soldCount: 'soldCount',
  publishedAt: 'publishedAt',
  expiresAt: 'expiresAt',
  takedownReason: 'takedownReason',
  takedownAt: 'takedownAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VariantScalarFieldEnum = {
  id: 'id',
  listingId: 'listingId',
  name: 'name',
  value: 'value',
  priceDiffSatang: 'priceDiffSatang',
  stock: 'stock',
  sku: 'sku',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  nameTh: 'nameTh',
  nameEn: 'nameEn',
  slug: 'slug',
  parentId: 'parentId',
  imageUrl: 'imageUrl',
  iconSvg: 'iconSvg',
  level: 'level',
  orderIndex: 'orderIndex',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  buyerId: 'buyerId',
  shopId: 'shopId',
  status: 'status',
  subtotalSatang: 'subtotalSatang',
  shippingFeeSatang: 'shippingFeeSatang',
  discountSatang: 'discountSatang',
  platformFeeSatang: 'platformFeeSatang',
  totalSatang: 'totalSatang',
  paymentMethod: 'paymentMethod',
  paymentStatus: 'paymentStatus',
  shippingProvider: 'shippingProvider',
  shipmentStatus: 'shipmentStatus',
  trackingNumber: 'trackingNumber',
  shippingName: 'shippingName',
  shippingPhone: 'shippingPhone',
  shippingAddressLine: 'shippingAddressLine',
  shippingSubdistrict: 'shippingSubdistrict',
  shippingDistrict: 'shippingDistrict',
  shippingProvince: 'shippingProvince',
  shippingPostalCode: 'shippingPostalCode',
  shippingLatitude: 'shippingLatitude',
  shippingLongitude: 'shippingLongitude',
  notes: 'notes',
  sellerNotes: 'sellerNotes',
  cancelledAt: 'cancelledAt',
  cancelReason: 'cancelReason',
  paidAt: 'paidAt',
  acceptedAt: 'acceptedAt',
  rejectedAt: 'rejectedAt',
  shippedAt: 'shippedAt',
  deliveredAt: 'deliveredAt',
  completedAt: 'completedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  listingId: 'listingId',
  variantId: 'variantId',
  quantity: 'quantity',
  priceSatang: 'priceSatang',
  totalPriceSatang: 'totalPriceSatang',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  amountSatang: 'amountSatang',
  method: 'method',
  status: 'status',
  gateway: 'gateway',
  gatewayTxId: 'gatewayTxId',
  gatewayData: 'gatewayData',
  qrCodeUrl: 'qrCodeUrl',
  receiptUrl: 'receiptUrl',
  failureReason: 'failureReason',
  capturedAt: 'capturedAt',
  refundedAt: 'refundedAt',
  refundAmountSatang: 'refundAmountSatang',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WalletScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  balanceSatang: 'balanceSatang',
  pendingSatang: 'pendingSatang',
  currency: 'currency',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WalletTransactionScalarFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  type: 'type',
  amountSatang: 'amountSatang',
  balanceAfterSatang: 'balanceAfterSatang',
  referenceType: 'referenceType',
  referenceId: 'referenceId',
  description: 'description',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.PayoutScalarFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  amountSatang: 'amountSatang',
  status: 'status',
  bankName: 'bankName',
  bankAccount: 'bankAccount',
  bankAccountName: 'bankAccountName',
  requestedAt: 'requestedAt',
  processedAt: 'processedAt',
  paidAt: 'paidAt',
  failedAt: 'failedAt',
  failureReason: 'failureReason',
  gatewayTxId: 'gatewayTxId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.ChatThreadScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  buyerId: 'buyerId',
  listingId: 'listingId',
  lastMessageAt: 'lastMessageAt',
  lastMessage: 'lastMessage',
  unreadCount: 'unreadCount',
  isArchived: 'isArchived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  threadId: 'threadId',
  senderId: 'senderId',
  content: 'content',
  messageType: 'messageType',
  metadata: 'metadata',
  isRead: 'isRead',
  readAt: 'readAt',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  listingId: 'listingId',
  shopId: 'shopId',
  buyerId: 'buyerId',
  rating: 'rating',
  comment: 'comment',
  images: 'images',
  sellerReply: 'sellerReply',
  sellerRepliedAt: 'sellerRepliedAt',
  isVisible: 'isVisible',
  isVerifiedPurchase: 'isVerifiedPurchase',
  helpfulCount: 'helpfulCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  body: 'body',
  link: 'link',
  metadata: 'metadata',
  isRead: 'isRead',
  readAt: 'readAt',
  sentViaPush: 'sentViaPush',
  sentViaEmail: 'sentViaEmail',
  sentViaSms: 'sentViaSms',
  createdAt: 'createdAt'
};

exports.Prisma.SavedListingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  listingId: 'listingId',
  createdAt: 'createdAt'
};

exports.Prisma.SearchAlertScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  query: 'query',
  filters: 'filters',
  frequency: 'frequency',
  lastSentAt: 'lastSentAt',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BoostScalarFieldEnum = {
  id: 'id',
  listingId: 'listingId',
  type: 'type',
  durationHours: 'durationHours',
  costSatang: 'costSatang',
  startsAt: 'startsAt',
  endsAt: 'endsAt',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  listingId: 'listingId',
  reporterId: 'reporterId',
  reason: 'reason',
  details: 'details',
  evidenceUrls: 'evidenceUrls',
  status: 'status',
  resolvedById: 'resolvedById',
  resolvedAt: 'resolvedAt',
  resolution: 'resolution',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DisputeScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  openedById: 'openedById',
  reason: 'reason',
  description: 'description',
  evidenceUrls: 'evidenceUrls',
  status: 'status',
  resolution: 'resolution',
  refundAmountSatang: 'refundAmountSatang',
  resolvedById: 'resolvedById',
  resolvedAt: 'resolvedAt',
  resolutionNotes: 'resolutionNotes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DisputeMessageScalarFieldEnum = {
  id: 'id',
  disputeId: 'disputeId',
  senderId: 'senderId',
  content: 'content',
  attachments: 'attachments',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt'
};

exports.Prisma.OutboxEventScalarFieldEnum = {
  id: 'id',
  eventType: 'eventType',
  payload: 'payload',
  isProcessed: 'isProcessed',
  processedAt: 'processedAt',
  error: 'error',
  retryCount: 'retryCount',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  actorId: 'actorId',
  actorType: 'actorType',
  action: 'action',
  resourceType: 'resourceType',
  resourceId: 'resourceId',
  changes: 'changes',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  createdAt: 'createdAt'
};

exports.Prisma.BannerScalarFieldEnum = {
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  linkUrl: 'linkUrl',
  position: 'position',
  categoryId: 'categoryId',
  startDate: 'startDate',
  endDate: 'endDate',
  isActive: 'isActive',
  clickCount: 'clickCount',
  impressionCount: 'impressionCount',
  priority: 'priority',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CMSPageScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  titleTh: 'titleTh',
  titleEn: 'titleEn',
  contentTh: 'contentTh',
  contentEn: 'contentEn',
  excerptTh: 'excerptTh',
  excerptEn: 'excerptEn',
  coverImageUrl: 'coverImageUrl',
  authorId: 'authorId',
  isPublished: 'isPublished',
  publishedAt: 'publishedAt',
  viewCount: 'viewCount',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdminUserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  fullName: 'fullName',
  role: 'role',
  permissions: 'permissions',
  isActive: 'isActive',
  lastLoginAt: 'lastLoginAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  createdAt: 'createdAt'
};

exports.Prisma.OTPScalarFieldEnum = {
  id: 'id',
  phone: 'phone',
  code: 'code',
  expiresAt: 'expiresAt',
  isUsed: 'isUsed',
  usedAt: 'usedAt',
  attempts: 'attempts',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  SELLER: 'SELLER',
  ADMIN: 'ADMIN'
};

exports.ShopStatus = exports.$Enums.ShopStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  CLOSED: 'CLOSED'
};

exports.PlanType = exports.$Enums.PlanType = {
  FREE: 'FREE',
  BASIC: 'BASIC',
  PRO: 'PRO',
  PREMIUM: 'PREMIUM'
};

exports.ListingStatus = exports.$Enums.ListingStatus = {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  PUBLISHED: 'PUBLISHED',
  SOLD_OUT: 'SOLD_OUT',
  EXPIRED: 'EXPIRED',
  HIDDEN: 'HIDDEN',
  TAKEDOWN: 'TAKEDOWN'
};

exports.VariantCondition = exports.$Enums.VariantCondition = {
  NEW: 'NEW',
  LIKE_NEW: 'LIKE_NEW',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAID: 'PAID',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PACKING: 'PACKING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  DISPUTED: 'DISPUTED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  PROMPTPAY: 'PROMPTPAY',
  CREDIT_CARD: 'CREDIT_CARD',
  CASH_ON_DELIVERY: 'CASH_ON_DELIVERY',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  AUTHORIZED: 'AUTHORIZED',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED'
};

exports.ShippingProvider = exports.$Enums.ShippingProvider = {
  THAILAND_POST: 'THAILAND_POST',
  FLASH_EXPRESS: 'FLASH_EXPRESS',
  JNT_EXPRESS: 'JNT_EXPRESS',
  KERRY_EXPRESS: 'KERRY_EXPRESS',
  SELF_DELIVERY: 'SELF_DELIVERY'
};

exports.ShipmentStatus = exports.$Enums.ShipmentStatus = {
  PENDING: 'PENDING',
  PICKUP_REQUESTED: 'PICKUP_REQUESTED',
  PICKED_UP: 'PICKED_UP',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED',
  FAILED_DELIVERY: 'FAILED_DELIVERY'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  ORDER_PLACED: 'ORDER_PLACED',
  ORDER_ACCEPTED: 'ORDER_ACCEPTED',
  ORDER_REJECTED: 'ORDER_REJECTED',
  ORDER_SHIPPED: 'ORDER_SHIPPED',
  ORDER_DELIVERED: 'ORDER_DELIVERED',
  ORDER_CANCELLED: 'ORDER_CANCELLED',
  PAYMENT_RECEIVED: 'PAYMENT_RECEIVED',
  REVIEW_POSTED: 'REVIEW_POSTED',
  CHAT_MESSAGE: 'CHAT_MESSAGE',
  SYSTEM_ANNOUNCEMENT: 'SYSTEM_ANNOUNCEMENT',
  LISTING_APPROVED: 'LISTING_APPROVED',
  LISTING_REJECTED: 'LISTING_REJECTED',
  DISPUTE_UPDATE: 'DISPUTE_UPDATE',
  PAYOUT_COMPLETED: 'PAYOUT_COMPLETED'
};

exports.BoostType = exports.$Enums.BoostType = {
  FEATURED: 'FEATURED',
  TOP_OF_FEED: 'TOP_OF_FEED',
  CATEGORY_HIGHLIGHT: 'CATEGORY_HIGHLIGHT'
};

exports.ReportReason = exports.$Enums.ReportReason = {
  PROHIBITED_ITEM: 'PROHIBITED_ITEM',
  COUNTERFEIT: 'COUNTERFEIT',
  FRAUDULENT: 'FRAUDULENT',
  INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT',
  SPAM: 'SPAM',
  WRONG_CATEGORY: 'WRONG_CATEGORY',
  OTHER: 'OTHER'
};

exports.ReportStatus = exports.$Enums.ReportStatus = {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  ACTION_TAKEN: 'ACTION_TAKEN',
  DISMISSED: 'DISMISSED'
};

exports.DisputeStatus = exports.$Enums.DisputeStatus = {
  OPEN: 'OPEN',
  UNDER_REVIEW: 'UNDER_REVIEW',
  SELLER_RESPONDED: 'SELLER_RESPONDED',
  RESOLVED: 'RESOLVED',
  ESCALATED_TO_ADMIN: 'ESCALATED_TO_ADMIN',
  CLOSED: 'CLOSED'
};

exports.DisputeResolution = exports.$Enums.DisputeResolution = {
  NONE: 'NONE',
  REFUND_FULL: 'REFUND_FULL',
  REFUND_PARTIAL: 'REFUND_PARTIAL',
  RELEASE_TO_SELLER: 'RELEASE_TO_SELLER',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Shop: 'Shop',
  Listing: 'Listing',
  Variant: 'Variant',
  Category: 'Category',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Payment: 'Payment',
  Wallet: 'Wallet',
  WalletTransaction: 'WalletTransaction',
  Payout: 'Payout',
  ChatThread: 'ChatThread',
  Message: 'Message',
  Review: 'Review',
  Notification: 'Notification',
  SavedListing: 'SavedListing',
  SearchAlert: 'SearchAlert',
  Boost: 'Boost',
  Report: 'Report',
  Dispute: 'Dispute',
  DisputeMessage: 'DisputeMessage',
  OutboxEvent: 'OutboxEvent',
  AuditLog: 'AuditLog',
  Banner: 'Banner',
  CMSPage: 'CMSPage',
  AdminUser: 'AdminUser',
  Session: 'Session',
  OTP: 'OTP'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
