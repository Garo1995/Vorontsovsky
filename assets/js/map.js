const SELECT_MODE = {
    DEFAULT: "default", REMOVED: "removed",
}

class YandexMapConstructor {
    constructor({
                    mapContainerId,
                    defaultCenter = [55.817864, 37.750991],
                    zoom = 15,
                    defaultMarker = [],
                    isMultiSelect = false,
                    selectAllMode = SELECT_MODE.DEFAULT,
                }) {
        this.mapContainerId = mapContainerId;
        this.defaultCenter = defaultCenter;
        this.zoom = zoom;
        this.myMap = null;
        this.selectedCategory = [];
        this.mainPlacemark = null;
        this.pointCollection = null;
        this.initialized = false;
        this.isMultiSelect = isMultiSelect;
        this.defaultMarker = defaultMarker;
        this.selectAllMode = selectAllMode;

        this.init();
    }

    init() {
        if (!this.initialized && window.ymaps) {
            this.initialized = true;
            ymaps.ready(() => this.initMap());
        }
    }

    initMap() {
        this.myMap = new ymaps.Map(this.mapContainerId, {
            center: this.defaultCenter, zoom: this.zoom, controls: []
        }, {
            suppressMapOpenBlock: true, // запрет на переход в Яндекс.Карты
            yandexMapDisablePoiInteractivity: true // отключить клики по POI
        });
        if (this.defaultMarker.length) {
            this.defaultMarker.forEach(marker => {
                const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom main ${marker.className}" data-id="${marker.defaultCenter[0]}">
            <img class="cover" src="${marker.icon}" alt="icons">
            <p class="title">${marker.title}</p>
        </div>`)

                this.mainPlacemark = new ymaps.Placemark(marker.defaultCenter, {}, {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: '',
                    iconImageSize: [20, 20],
                    zIndex: 2,
                    iconContentLayout: iconContent
                });

                this.myMap.geoObjects.add(this.mainPlacemark);
            })
        }


    }


    #generateMarkersList() {
        this.pointCollection = new ymaps.GeoObjectCollection();
        this.selectedCategory.forEach((category) => {
            category.points.forEach(point => {
                const icon = point.icon ? point.icon : category.icon

                const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom" data-id="${point.lat}">
          <div class="bs-point-circle">
                <img src="${icon}" alt="icons">
            </div>
          <p class="title">${point.title}</p>
        </div>
      `);

                const placeMark = new ymaps.Placemark([point.lat, point.lot], {
                    iden: point.lat
                }, {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: '',
                    iconImageSize: [48, 48],
                    iconImageOffset: [-48, -48],
                    iconContentOffset: [0, 0],
                    zIndex: 2,
                    iconContentLayout: iconContent
                });

                placeMark.events.add('mouseenter', (e) => {
                    const id = e.get('target').properties.get('iden');
                    const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                    if (el) el.classList.add('hover');
                });

                placeMark.events.add('mouseleave', (e) => {
                    const id = e.get('target').properties.get('iden');
                    const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                    if (el) el.classList.remove('hover');
                });

                this.pointCollection.add(placeMark);
            })
        });
        this.myMap.geoObjects.add(this.pointCollection);
        if (this.mainPlacemark) {
            this.myMap.geoObjects.add(this.mainPlacemark);
        }

    }

    changeCategory({
                       category, isClear, selectedList, isSameFromParent
                   }) {

        if (!this.myMap || !window.ymaps) return;

        const isSame = this.selectedCategory.some(x => x.title === category.title);
        this.myMap.geoObjects.removeAll();

        if (this.selectAllMode === SELECT_MODE.REMOVED) {
            if (selectedList.length) {
                if (isSame && isSameFromParent) {
                    if (category.isAll) {
                        this.selectedCategory = []
                    } else {
                        this.selectedCategory = this.selectedCategory.filter(x => x.title !== category.title);
                    }

                } else {
                    this.selectedCategory = [category, ...selectedList]
                }
            } else {
                this.selectedCategory = []
            }

        } else {
            if (isSame) {
                if (this.isMultiSelect) {
                    this.selectedCategory = this.selectedCategory.filter(x => x.title !== category.title);
                } else {
                    this.selectedCategory = []
                }
            } else {
                if (this.isMultiSelect) {
                    if (isClear || category.isAll) {
                        this.selectedCategory = [category]
                    } else {
                        this.selectedCategory.push(category)
                    }
                } else {
                    this.selectedCategory = [category]
                }
            }
        }

        this.#generateMarkersList()
        return this.selectedCategory
    }

    zoomIn() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() + 1, {duration: 300});
        }
    }

    zoomOut() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() - 1, {duration: 300});
        }
    }

    resetToDefaultCenter() {
        if (this.myMap) {
            this.myMap.setCenter(this.defaultCenter, this.zoom, {
                duration: 300
            });
        }
    }
}

